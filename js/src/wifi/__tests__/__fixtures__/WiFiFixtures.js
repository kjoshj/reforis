/*
 * Copyright (C) 2021 CZ.NIC z.s.p.o. (http://www.nic.cz/)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

export const wifiFixtures = {
    devices: [
        {
            SSID: "Turris Test 1",
            available_bands: [
                {
                    available_channels: [
                        {
                            frequency: 2412,
                            number: 1,
                            radar: false,
                        },
                        {
                            frequency: 2417,
                            number: 2,
                            radar: false,
                        },
                    ],
                    available_htmodes: ["NOHT", "HT20", "HT40"],
                    band: "2g",
                },
                {
                    available_channels: [
                        {
                            frequency: 5180,
                            number: 36,
                            radar: false,
                        },
                        {
                            frequency: 5200,
                            number: 40,
                            radar: false,
                        },
                    ],
                    available_htmodes: [
                        "NOHT",
                        "HT20",
                        "HT40",
                        "VHT20",
                        "VHT40",
                        "VHT80",
                    ],
                    band: "5g",
                },
            ],
            channel: 36,
            enabled: false,
            encryption: "WPA2/3",
            guest_wifi: {
                SSID: "Turris Test 1 - Guest",
                enabled: false,
                password: "",
            },
            hidden: false,
            htmode: "VHT80",
            band: "5g",
            id: 0,
            password: "testpass",
        },
        {
            SSID: "Turris Test 2",
            available_bands: [
                {
                    available_channels: [
                        {
                            frequency: 2412,
                            number: 1,
                            radar: false,
                        },
                        {
                            frequency: 2417,
                            number: 2,
                            radar: false,
                        },
                    ],
                    available_htmodes: ["NOHT", "HT20", "HT40"],
                    band: "2g",
                },
                {
                    available_channels: [
                        {
                            frequency: 5180,
                            number: 36,
                            radar: false,
                        },
                        {
                            frequency: 5200,
                            number: 40,
                            radar: false,
                        },
                    ],
                    available_htmodes: [
                        "NOHT",
                        "HT20",
                        "HT40",
                        "VHT20",
                        "VHT40",
                        "VHT80",
                    ],
                    band: "5g",
                },
            ],
            channel: 36,
            enabled: false,
            encryption: "WPA2/3",
            guest_wifi: {
                SSID: "Turris Test 2 - Guest",
                enabled: false,
                password: "",
            },
            hidden: false,
            htmode: "VHT80",
            band: "5g",
            id: 1,
            password: "testpass",
        },
    ],
};
