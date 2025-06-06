/*
 * Copyright (C) 2020-2025 CZ.NIC z.s.p.o. (https://www.nic.cz/)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

export default function notificationsSettingsFixture() {
    return {
        emails: {
            common: {
                send_news: true,
                severity_filter: 1,
                to: ["some@example.com"],
            },
            enabled: true,
            smtp_custom: {
                from: "router@example.com",
                host: "example.com",
                password: "test_password",
                port: 465,
                security: "ssl",
                username: "root",
            },
            smtp_turris: {
                sender_name: "turris",
            },
            smtp_type: "custom",
        },
        reboots: {
            delay: 3,
            time: "03:30",
        },
        ntfy: {
            enabled: false,
            url: "https://example.com",
            priority: "high",
        },
    };
}
