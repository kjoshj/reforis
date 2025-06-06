/*
 * Copyright (C) 2019-2025 CZ.NIC z.s.p.o. (https://www.nic.cz/)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import { validateMultipleEmails } from "foris";

export default function validator(formData) {
    const { emails: emailsFormData } = formData;
    const { ntfy: ntfyFormData } = formData;

    const errors = {};

    if (emailsFormData.enabled) {
        errors.common = commonValidator(emailsFormData.common);
        if (emailsFormData.smtp_type === "turris")
            errors.smtp_turris = smtpTurrisValidator(
                emailsFormData.smtp_turris
            );
        else if (emailsFormData.smtp_type === "custom")
            errors.smtp_custom = smtpCustomValidator(
                emailsFormData.smtp_custom
            );
    } else {
        errors.common = undefined;
        errors.smtp_turris = undefined;
        errors.smtp_custom = undefined;
    }

    if (ntfyFormData.enabled) {
        if (ntfyFormData.url === "")
            errors.ntfy = { url: _("Can't be empty.") };
    } else {
        errors.ntfy = undefined;
    }

    return JSON.stringify(errors) !== "{}" ? errors : undefined;
}

function commonValidator(formData) {
    if (formData.to === "") return { to: _("Can't be empty.") };

    const toError = validateMultipleEmails(formData.to);
    return toError ? { to: toError } : undefined;
}

const SENDER_NAME_RE = /^[0-9a-zA-Z_\\.-]+$/;

function smtpTurrisValidator(formData) {
    if (formData.sender_name === "")
        return { sender_name: _("Sender's name can't be empty.") };

    return !SENDER_NAME_RE.test(formData.sender_name)
        ? {
              sender_name: _(
                  "Sender's name can contain only alphanumeric characters, dots and underscores."
              ),
          }
        : undefined;
}

function smtpCustomValidator(formData) {
    if (Number.isNaN(parseInt(formData.port)))
        return { port: _("Port is an number.") };
    if (formData.port > 65535) return { port: _("Maximum port is 65535.") };
    if (formData.port < 1) return { port: _("Minimum port is 1.") };
    return undefined;
}
