/*
 * Copyright (C) 2019-2025 CZ.NIC z.s.p.o. (https://www.nic.cz/)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import React from "react";

import { Switch, RadioSet, TextInput } from "foris";
import PropTypes from "prop-types";

import HELP_TEXTS from "./helpTexts";
import SMTPCustomForm from "./SMTPCustomForm";
import SMTPTurrisForm from "./SMTPTurrisForm";

const SMTP_TYPE_CHOICES = [
    {
        label: _("Turris"),
        value: "turris",
    },
    {
        label: _("Custom"),
        value: "custom",
    },
];

NotificationsEmailSettingsForm.propTypes = {
    formData: PropTypes.shape({
        emails: PropTypes.shape({
            enabled: PropTypes.bool,
            smtp_type: PropTypes.oneOf(["turris", "custom"]),
            common: PropTypes.shape({
                to: PropTypes.string,
                severity_filter: PropTypes.number,
                send_news: PropTypes.bool,
            }),
            smtp_turris: PropTypes.object,
            smtp_custom: PropTypes.object,
        }),
    }).isRequired,
    formErrors: PropTypes.shape({
        smtp_turris: PropTypes.object,
        smtp_custom: PropTypes.object,
        common: PropTypes.shape({
            to: PropTypes.string,
        }),
    }),
    setFormValue: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
};

NotificationsEmailSettingsForm.defaultProps = {
    setFormValue: () => {},
    formData: {},
    formErrors: {},
};

export default function NotificationsEmailSettingsForm({
    formData,
    formErrors,
    setFormValue,
    disabled,
}) {
    const { emails: emailsFormData } = formData;

    let smtpForm = null;
    if (emailsFormData.smtp_type === "turris") {
        smtpForm = (
            <SMTPTurrisForm
                formData={emailsFormData.smtp_turris}
                formErrors={formErrors.smtp_turris}
                setFormValue={setFormValue}
                disabled={disabled}
            />
        );
    } else if (emailsFormData.smtp_type === "custom") {
        smtpForm = (
            <SMTPCustomForm
                formData={emailsFormData.smtp_custom}
                formErrors={formErrors.smtp_custom}
                setFormValue={setFormValue}
                disabled={disabled}
            />
        );
    }

    return (
        <>
            <h2>{_("Email Notification Settings")}</h2>
            <Switch
                label={_("Enable email notifications")}
                checked={emailsFormData.enabled}
                onChange={setFormValue((value) => ({
                    emails: {
                        enabled: { $set: value },
                    },
                }))}
                disabled={disabled}
            />
            {emailsFormData.enabled && (
                <>
                    <RadioSet
                        label={_("SMTP provider")}
                        name="smtp_provider"
                        choices={SMTP_TYPE_CHOICES}
                        value={emailsFormData.smtp_type}
                        helpText={HELP_TEXTS.smtp_type}
                        inline
                        className="mb-0"
                        onChange={setFormValue((value) => ({
                            emails: {
                                smtp_type: { $set: value },
                            },
                        }))}
                        disabled={disabled}
                    />
                    <TextInput
                        label={_("Recipient's email")}
                        value={emailsFormData.common.to || ""}
                        error={formErrors.common?.to}
                        helpText={HELP_TEXTS.common.to}
                        required
                        onChange={setFormValue((value) => ({
                            emails: {
                                common: { to: { $set: value } },
                            },
                        }))}
                        disabled={disabled}
                    />
                    {smtpForm}
                </>
            )}
        </>
    );
}
