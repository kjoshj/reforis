/*
 * Copyright (C) 2019-2025 CZ.NIC z.s.p.o. (https://www.nic.cz/)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import React from "react";

import { TextInput } from "foris";
import PropTypes from "prop-types";

import HELP_TEXTS from "./helpTexts";

SMTPTurrisForm.propTypes = {
    formData: PropTypes.shape({ sender_name: PropTypes.string }).isRequired,
    formErrors: PropTypes.shape({ sender_name: PropTypes.string }),
    setFormValue: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
};

SMTPTurrisForm.defaultProps = {
    setFormValue: () => {},
    formData: {},
    formErrors: {},
};

export default function SMTPTurrisForm({
    formData,
    formErrors,
    setFormValue,
    disabled,
}) {
    return (
        <TextInput
            label={_("Sender's name")}
            value={formData.sender_name || ""}
            error={formErrors.sender_name}
            helpText={HELP_TEXTS.smtp_turris.sender_name}
            onChange={setFormValue((value) => ({
                emails: {
                    smtp_turris: { sender_name: { $set: value } },
                },
            }))}
            disabled={disabled}
        />
    );
}
