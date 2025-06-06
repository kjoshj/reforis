#  Copyright (C) 2020-2025 CZ.NIC z.s.p.o. (https://www.nic.cz/)
#
#  This is free software, licensed under the GNU General Public License v3.
#  See /LICENSE for more information.

import os
from importlib.metadata import distribution, PackageNotFoundError

from flask import current_app, jsonify


def about():
    """
    About.
    See ``get``  action in the `foris-controller about module JSON schema
    <https://gitlab.labs.nic.cz/turris/foris-controller/foris-controller/blob/master/foris_controller_modules/about/schema/about.json>`_.
    """
    data = current_app.backend.perform("about", "get")
    data["serial"] = int(data["serial"], 16)
    # additional reforis version info
    try:
        data["reforis_version"] = distribution("reforis").version
    except PackageNotFoundError:
        data["reforis_version"] = "Unknown"
    return jsonify(data)


def controller_id():
    """
    Return controller ID of current device.
    """
    return jsonify(os.environ.get("CONTROLLER_ID"))


# pylint: disable=invalid-name
views = [
    {"rule": "/about", "view_func": about, "methods": ["GET"]},
    {"rule": "/controller_id", "view_func": controller_id, "methods": ["GET"]},
]
