/*
 * Copyright (C) 2020-2024 CZ.NIC z.s.p.o. (https://www.nic.cz/)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import React from "react";
import mockAxios from "jest-mock-axios";
import { render, wait, getByText } from "foris/testUtils/customTestRender";

import AutomaticUpdatesCard from "../AutomaticUpdatesCard";
import ThreatDetectionCard from "../ThreatDetectionCard";
import DynamicFirewallCard from "../DynamicFirewallCard";
import LibrespeedCard from "../LibrespeedCard";
import OpenVPNClientsCard from "../OpenVPNClientsCard";

import {
    automaticUpdatesCardFixture,
    automaticUpdatesCardFixture2,
    threatDetectionCardFixture,
    threatDetectionCardFixture2,
    librespeedCardFixture,
    librespeedCardFixture2,
    openVPNClientsCardFixture,
    openVPNClientsCardFixture2,
} from "../../__tests__/__fixtures__/overview";

describe("<Cards/>", () => {
    describe("<AutomaticUpdatesCard/>", () => {
        it("Snapshot: activated", async () => {
            const { container } = render(<AutomaticUpdatesCard />);
            mockAxios.mockResponse({ data: automaticUpdatesCardFixture });
            await wait(() => getByText(container, "Automatic Updates"));

            expect(container).toMatchSnapshot();
        });

        it("Snapshot: disabled", async () => {
            const { container } = render(<AutomaticUpdatesCard />);
            mockAxios.mockResponse({ data: automaticUpdatesCardFixture2 });
            await wait(() => getByText(container, "Automatic Updates"));

            expect(container).toMatchSnapshot();
        });
    });

    describe("<ThreatDetectionCard/>", () => {
        it("Snapshot: activated", async () => {
            const { container } = render(<ThreatDetectionCard isInstalled />);
            mockAxios.mockResponse({ data: threatDetectionCardFixture });
            await wait(() => getByText(container, "Threat Detection"));

            expect(container).toMatchSnapshot();
        });

        it("Snapshot: disabled", async () => {
            const { container } = render(<ThreatDetectionCard />);
            mockAxios.mockResponse({ data: threatDetectionCardFixture2 });
            await wait(() => getByText(container, "Threat Detection"));

            expect(container).toMatchSnapshot();
        });
    });

    describe("<DynamicFirewallCard/>", () => {
        const activated = () => true;
        const disabled = () => false;

        it("Snapshot: activated", () => {
            const { container } = render(
                <DynamicFirewallCard enabled={activated()} />
            );
            expect(container).toMatchSnapshot();
        });

        it("Snapshot: disabled", () => {
            const { container } = render(
                <DynamicFirewallCard enabled={disabled()} />
            );
            expect(container).toMatchSnapshot();
        });
    });

    describe("<LibrespeedCard/>", () => {
        it("Snapshot: contains tests", async () => {
            const { container } = render(<LibrespeedCard />);
            mockAxios.mockResponse({ data: librespeedCardFixture });
            await wait(() => getByText(container, "LibreSpeed"));

            expect(container).toMatchSnapshot();
        });

        it("Snapshot: empty", async () => {
            const { container } = render(<LibrespeedCard />);
            mockAxios.mockResponse({ data: librespeedCardFixture2 });
            await wait(() => getByText(container, "LibreSpeed"));

            expect(container).toMatchSnapshot();
        });
    });

    describe("<OpenVPNClientsCard/>", () => {
        it("Snapshot: contains clients", async () => {
            const { container } = render(<OpenVPNClientsCard />);
            mockAxios.mockResponse({ data: openVPNClientsCardFixture });
            await wait(() => getByText(container, "OpenVPN Clients"));

            expect(container).toMatchSnapshot();
        });

        it("Snapshot: empty", async () => {
            const { container } = render(<OpenVPNClientsCard />);
            mockAxios.mockResponse({ data: openVPNClientsCardFixture2 });
            await wait(() => getByText(container, "OpenVPN Clients"));

            expect(container).toMatchSnapshot();
        });
    });
});
