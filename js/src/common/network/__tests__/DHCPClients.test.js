/*
 * Copyright (C) 2019-2022 CZ.NIC z.s.p.o. (https://www.nic.cz/)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import React from "react";
import { render } from "foris/testUtils/customTestRender";

import DHCPClients from "common/network/DHCPClients";
import { clients } from "./__fixtures__/clients";

describe("<DHCPClients/>", () => {
    it("Test with snapshot.", () => {
        const { container } = render(<DHCPClients clients={clients} />);
        expect(container).toMatchSnapshot();
    });
});
