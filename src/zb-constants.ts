/**
 *
 * zb-constants - Exports constants used by the zigbee adapter.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.*
 */

import { Utils } from 'gateway-addon';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const zclId = require('zcl-id');

function addHexValues(dict: Record<string, number>): Record<string, number | string> {
  const obj: Record<string, number | string> = {};
  for (const [key, value] of Object.entries(dict)) {
    obj[key] = value;
    obj[`${key}_HEX`] = Utils.hexStr(value, 4);
  }

  return obj;
}

// For each key/value pair, add an entry where the key is the value and
// vice-versa.
function addInverseMap(dict: Record<number, string>): Record<number | string, number | string> {
  const obj: Record<number | string, number | string> = {};
  for (const [key, value] of Object.entries(dict)) {
    obj[key] = value;
    obj[value] = parseInt(key);
  }

  return obj;
}

// The following come from the Zigbee Specification,
// section 2.2.9 APS Sub-Layer Status values
export const APS_STATUS = addInverseMap({
  0x00: 'SUCCESS',
  0xa0: 'ASDU_TOO_LONG',
  0xa1: 'DEFRAG_DEFERRED',
  0xa2: 'DEFRAG_UNSUPPORTED',
  0xa3: 'ILLEGAL_REQUEST',
  0xa4: 'INVALID_BINDING',
  0xa5: 'INVALID_GROUP',
  0xa6: 'INVALID_PARAMETER',
  0xa7: 'NO_ACK',
  0xa8: 'NO_BOUND_DEVICE',
  0xa9: 'NO_SHORT_ADDRESS',
  0xaa: 'NOT_SUPPORTED',
  0xab: 'SECURED_LINK_KEY',
  0xac: 'SECURED_NWK_KEY',
  0xad: 'SECURITY_FAIL',
  0xae: 'TABLE_FULL',
  0xaf: 'UNSECURED',
  0xb0: 'UNSUPPORTED_ATTRIBUTE',
});

// The following come from the Zigbee Specification,
// section 3.7 NWK Layer Status Values
export const NWK_STATUS = addInverseMap({
  0x00: 'SUCCESS',
  0xc1: 'INVALID_PARAMETER',
  0xc2: 'INVALID_REQUEST',
  0xc3: 'NOT_PERMITTED',
  0xc4: 'STARTUP_FAILURE',
  0xc5: 'ALREADY_PRESENT',
  0xc6: 'SYNC_FAILURE',
  0xc7: 'NEIGHBOR_TABLE_FULL',
  0xc8: 'UNKNOWN_DEVICE',
  0xc9: 'UNSUPPORTED_ATTRIBUTE',
  0xca: 'NO_NETWORKS',
  0xcb: 'RESERVED1',
  0xcc: 'MAX_FRM_COUNTER',
  0xcd: 'NO_KEY',
  0xce: 'BAD_CCM_OUTPUT',
  0xcf: 'RESERVED2',
  0xd0: 'ROUTE_DISCOVERY_FAILED',
  0xd1: 'ROUTE_ERROR',
  0xd2: 'BT_TABLE_FULL',
  0xd3: 'FRAME_NOT_BUFFERED',
});

// The following came from the Zigbee PRO Stack User Guide published by NXP.
// https://www.nxp.com/docs/en/user-guide/JN-UG-3048.pdf

/* eslint-disable max-len */
export const MAC_STATUS = addInverseMap({
  0x00: 'MAC_SUCCESS', // Success
  0xe0: 'MAC_BEACON_LOSS', // Beacon loss after synchronisation request
  0xe1: 'MAC_CHANNEL_ACCESS_FAILURE', // CSMA/CA channel access failure
  0xe2: 'MAC_DENIED', // GTS request denied
  0xe3: 'MAC_DISABLE_TRX_FAILURE', // Could not disable transmit or receive
  0xe4: 'MAC_FAILED_SECURITY_CHECK', // Incoming frame failed security check
  0xe5: 'MAC_FRAME_TOO_LONG', // Frame too long, after security processing, to be sent
  0xe6: 'MAC_INVALID_GTS', // GTS transmission failed
  0xe7: 'MAC_INVALID_HANDLE', // Purge request failed to find entry in queue
  0xe8: 'MAC_INVALID_PARAMETER', // Out-of-range parameter in function
  0xe9: 'MAC_NO_ACK', // No acknowledgement received when expected
  0xea: 'MAC_NO_BEACON', // Scan failed to find any beacons
  0xeb: 'MAC_NO_DATA', // No response data after a data request
  0xec: 'MAC_NO_SHORT_ADDRESS', // No allocated network (short) address for operation
  0xed: 'MAC_OUT_OF_CAP', // Receiver-enable request could not be executed, as CAP finished
  0xee: 'MAC_PAN_ID_CONFLICT', // PAN ID conflict has been detected
  0xef: 'MAC_REALIGNMENT', // Co-ordinator realignment has been received
  0xf0: 'MAC_TRANSACTION_EXPIRED', // Pending transaction has expired and data discarded
  0xf1: 'MAC_TRANSACTION_OVERFLOW', // No capacity to store transaction
  0xf2: 'MAC_TX_ACTIVE', // Receiver-enable request could not be executed, as in transmit state
  0xf3: 'MAC_UNAVAILABLE_KEY', // Appropriate key is not available in ACL
  0xf4: 'MAC_UNSUPPORTED_ATTRIBUTE', // PIB Set/Get on unsupported attribute
});
/* eslint-enable max-len */

export const BROADCAST_ADDR = {
  ALL: 'ffff',
  NON_SLEEPING: 'fffd', // i.e. rxOnWhenIdle = true
  ROUTERS: 'fffc',
  LOW_POWER_ROUTERS: 'fffb',
};

export const UNKNOWN_ADDR_16 = 'fffe';

export const CLUSTER_ID = addHexValues({
  CLOSURESSHADECFG: zclId.cluster('closuresShadeCfg').value,
  CLOSURESWINDOWCOVERING: zclId.cluster('closuresWindowCovering').value,
  DOORLOCK: zclId.cluster('closuresDoorLock').value,
  GENBASIC: zclId.cluster('genBasic').value,
  GENBINARYINPUT: zclId.cluster('genBinaryInput').value,
  GENDEVICETEMPCFG: zclId.cluster('genDeviceTempCfg').value,
  GENLEVELCTRL: zclId.cluster('genLevelCtrl').value,
  GENONOFF: zclId.cluster('genOnOff').value,
  GENOTA: zclId.cluster('genOta').value,
  GENPOLLCTRL: zclId.cluster('genPollCtrl').value,
  GENPOWERCFG: zclId.cluster('genPowerCfg').value,
  GENGROUPS: zclId.cluster('genGroups').value,
  GENSCENES: zclId.cluster('genScenes').value,
  GENMULTISTATEINPUT: zclId.cluster('genMultistateInput').value,
  GENANALOGINPUT: zclId.cluster('genAnalogInput').value,
  HAELECTRICAL: zclId.cluster('haElectricalMeasurement').value,
  HVACTHERMOSTAT: zclId.cluster('hvacThermostat').value,
  HVACFANCTRL: zclId.cluster('hvacFanCtrl').value,
  HVACUSERINTERFACECFG: zclId.cluster('hvacUserInterfaceCfg').value,
  ILLUMINANCE_MEASUREMENT: zclId.cluster('msIlluminanceMeasurement').value,
  LIGHTINGCOLORCTRL: zclId.cluster('lightingColorCtrl').value,
  LIGHTLINK: zclId.cluster('lightLink').value,
  OCCUPANCY_SENSOR: zclId.cluster('msOccupancySensing').value,
  PRESSURE: zclId.cluster('msPressureMeasurement').value,
  RELATIVE_HUMIDITY: zclId.cluster('msRelativeHumidity').value,
  SEMETERING: zclId.cluster('seMetering').value,
  SSIASZONE: zclId.cluster('ssIasZone').value,
  TEMPERATURE: zclId.cluster('msTemperatureMeasurement').value,
});

export const ATTR_ID: Record<string, Record<string, number>> = {};
function makeAttrIds(clusterName: string, attrNames: string[]): void {
  const clusterId = CLUSTER_ID[clusterName];
  const attrIdDict: Record<string, number> = {};
  for (const attrName of attrNames) {
    attrIdDict[attrName.toUpperCase()] = zclId.attr(clusterId, attrName).value;
  }
  ATTR_ID[clusterName] = attrIdDict;
}

makeAttrIds('GENBASIC', [
  'zclVersion', // 0
  'appVersion', // 1
  'modelId', // 5
  'powerSource', // 7
]);
makeAttrIds('GENPOLLCTRL', [
  'checkinInterval', // 0
  'longPollInterval', // 1
  'shortPollInterval', // 2
  'fastPollTimeout', // 3
  'checkinIntervalMin', // 4
  'longPollIntervalMin', // 5
  'fastPollTimeoutMax', // 6
]);
makeAttrIds('LIGHTINGCOLORCTRL', [
  'currentHue', // 0
  'currentSaturation', // 1
  'currentX', // 3
  'currentY', // 4
  'colorMode', // 8
  'colorCapabilities', // 16394 (0x400a)
]);
makeAttrIds('SSIASZONE', [
  'zoneState', // 0
  'zoneType', // 1
  'zoneStatus', // 2
  'iasCieAddr', // 16 (0x10)
  'zoneId', // 17 (0x11)
]);

// COLOR_CAPABILITY describes values for the colorCapability attribute from
// the lightingColorCtrl cluster.
export const COLOR_CAPABILITY = {
  HUE_SAT: 1 << 0,
  ENHANCED_HUE_SAT: 1 << 1,
  XY: 1 << 3,
  COLOR: (1 << 0) | (1 << 1) | (1 << 3),

  TEMPERATURE: 1 << 4,
};

// COLOR_MODE describes values for the colorMode attribute from
// the lightingColorCtrl cluster.
export const COLOR_MODE = {
  HUE_SAT: 0,
  XY: 1,
  TEMPERATURE: 2,
};

// Server in this context means "server of the cluster"
export const DIR = {
  CLIENT_TO_SERVER: 0,
  SERVER_TO_CLIENT: 1,
};

export const DOORLOCK_EVENT_CODES = [
  'Unknown', // 0
  'Lock', // 1
  'Unlock', // 2
  'LockFailInvalidPinOrID', // 3
  'LockFailInvalidSchedule', // 4
  'UnlockFailInvalidPinOrID', // 5
  'UnlockFailInvalidSchedule', // 6
  'OneTouchLock', // 7
  'KeyLock', // 8
  'KeyUnlock', // 9
  'AutoLock', // 10 (0x0A)
  'ScheduleLock', // 11 (0x0B)
  'ScheduleUnlock', // 12 (0x0C)
  'ManualLock', // 13 (0x0D)
  'ManualUnlock', // 14 (0x0E)
  'NonAccessUserEvent', // 15 (0X0F)
];

// POWERSOURCE describes the values for the powerSource attribute from
// the genBasic cluster
export const POWERSOURCE = {
  UNKNOWN: 0,
  MAINS_SINGLE_PHASE: 1,
  MAINS_3_PHASE: 2,
  BATTERY: 3,
  DC_SOURCE: 4,
  EMERGENCY_MAINS_CONSTANTLY_POWERED: 5,
  EMERGENCY_MAINS_AND_TRANSFER_SWITCH: 6,
};

export const PROFILE_ID = addHexValues({
  ZDO: 0,
  ZHA: zclId.profile('HA').value,
  ZLL: zclId.profile('LL').value,
  GREEN: 0xa1e0,
});

export const STATUS = {
  SUCCESS: zclId.status('success').value,
  UNSUPPORTED_ATTRIB: zclId.status('unsupAttribute').value,
  INSUFFICIENT_SPACE: zclId.status('insufficientSpace').value,
};

// THERMOSTAT_MODE is used for the systemMode attribute
// for the hvacThermostat cluster.
export const THERMOSTAT_SYSTEM_MODE = [
  'off', // 0
  'auto', // 1
  null, // 2 - not used in the spec
  'cool', // 3
  'heat', // 4
  // There are other values, but these are the only ones we support
  // now.
];

// THERMOSTAT_MODE is used for the runningMode attribute
// for the hvacThermostat cluster.
export const THERMOSTAT_RUN_MODE = [
  'off', // 0
  null, // 1 - not used in the spec
  null, // 2 - not used in the spec
  'cooling', // 3
  'heating', // 4
  // There are other values, but these are the only ones we support
  // now.
];

// THERMOSTAT_STATE is used for the runningState attribute from the
// hvacThermostat cluster.
export const THERMOSTAT_STATE = [
  'heating', // 0  Heat 1st stage State On
  'cooling', // 1  Cool 1st stage State On
  'fan', // 2  Fan  1st stage State On
  'heating2', // 3  Heat 2nd stage State On
  'cooling2', // 4  Cool 2nd stage State On
  'fan2', // 5  Fan  2nd stage State On
  'fan3', // 6  Fan  3rd stage State On
];

// HVAC_FAN_MODE describes the fanMode attribute from the hvacFanCtrl
// cluster
export const HVAC_FAN_MODE = [
  'Off', // 0
  'Low', // 1
  'Medium', // 2
  'High', // 3
  'On', // 4
  'Auto', // 5
  'Smart', // 6
];

// HVAC_FAN_SEQ describes options available for the fanModeSequence
// attribute from the hvacFanCtrl cluster. Each of the labels
// separated by slashes must appear in the fan mode above.
export const HVAC_FAN_SEQ = [
  'Low/Medium/High', // 0
  'Low/High', // 1
  'Low/Medium/High/Auto', // 2
  'Low/High/Auto', // 3
  'On/Auto', // 4
];

// The following came from:
// http://www.zigbee.org/wp-content/uploads/2017/12/
// docs-15-0014-05-0plo-Lighting-OccupancyDevice-Specification-V1.0.pdf
//
// Zigbee Lighting & Occupancy Device Specification Version 1.0
export const ZHA_DEVICE_ID = {
  ON_OFF_SWITCH: '0000',
  ON_OFF_OUTPUT: '0002',
  SMART_PLUG: '0051',
  ON_OFF_LIGHT: '0100',
  DIMMABLE_LIGHT: '0101',
  COLORED_DIMMABLE_LIGHT: '0102',
  ON_OFF_LIGHT_SWITCH: '0103',
  DIMMER_SWITCH: '0104',
  COLOR_DIMMER_SWITCH: '0105',
  LIGHT_SENSOR: '0106',
  OCCUPANCY_SENSOR: '0107',
  ON_OFF_BALLAST: '0108',
  DIMMABLE_PLUGIN: '010b',
  COLOR_TEMPERATURE_LIGHT: '010c',
  EXTENDED_COLOR_LIGHT: '010d',
  LIGHT_LEVEL_SENSOR: '010e',
  COLOR_CONTROLLER: '0800',
  COLOR_SCENE_CONTROLLER: '0810',
  NON_COLOR_CONTROLLER: '0820',
  NON_COLOR_SCENE_CONTROLLER: '0830',
  CONTROL_BRIDGE: '0840',
  ON_OFF_SENSOR: '0850',

  isLight: function isLight(deviceId: string): boolean {
    return (
      deviceId == ZHA_DEVICE_ID.ON_OFF_LIGHT ||
      deviceId == ZHA_DEVICE_ID.DIMMABLE_LIGHT ||
      deviceId == ZHA_DEVICE_ID.COLORED_DIMMABLE_LIGHT ||
      deviceId == ZHA_DEVICE_ID.COLOR_TEMPERATURE_LIGHT ||
      deviceId == ZHA_DEVICE_ID.EXTENDED_COLOR_LIGHT
    );
  },

  isColorLight: function isColorLight(deviceId: string): boolean {
    return (
      deviceId == ZHA_DEVICE_ID.COLORED_DIMMABLE_LIGHT ||
      deviceId == ZHA_DEVICE_ID.EXTENDED_COLOR_LIGHT
    );
  },
  isColorTemperatureLight: function isColorTemperatureLight(deviceId: string): boolean {
    return deviceId == ZHA_DEVICE_ID.COLOR_TEMPERATURE_LIGHT;
  },
};

// ZLL Device Id describes device IDs from the ZLL spec.
export const ZLL_DEVICE_ID = {
  ON_OFF_LIGHT: '0000',
  ON_OFF_SWITCH: '0010',
  DIMMABLE_LIGHT: '0100',
  DIMMABLE_SWITCH: '0110',
  COLOR_LIGHT: '0200',
  EXTENDED_COLOR_LIGHT: '0210',
  COLOR_TEMPERATURE_LIGHT: '0220',
  COLOR_CONTROLLER: '0800',
  COLOR_SCENE_CONTROLLER: '0810',
  NON_COLOR_CONTROLLER: '0820',
  NON_COLOR_SCENE_CONTROLLER: '0830',
  CONTROL_BRIDGE: '0840',
  ON_OFF_SENSOR: '0850',

  isLight: function isLight(deviceId: string): boolean {
    return (
      deviceId == ZLL_DEVICE_ID.ON_OFF_LIGHT ||
      deviceId == ZLL_DEVICE_ID.DIMMABLE_LIGHT ||
      deviceId == ZLL_DEVICE_ID.COLOR_LIGHT ||
      deviceId == ZLL_DEVICE_ID.EXTENDED_COLOR_LIGHT ||
      deviceId == ZLL_DEVICE_ID.COLOR_TEMPERATURE_LIGHT
    );
  },

  isColorLight: function isColorLight(deviceId: string): boolean {
    return deviceId == ZLL_DEVICE_ID.COLOR_LIGHT || deviceId == ZLL_DEVICE_ID.EXTENDED_COLOR_LIGHT;
  },

  isColorTemperatureLight: function isColorTemperatureLight(deviceId: string): boolean {
    return deviceId == ZLL_DEVICE_ID.COLOR_TEMPERATURE_LIGHT;
  },
};

// ZONE_STATUS describes values for the zoneStatus attribute from
// the ssIasZone cluster.
export const ZONE_STATUS = {
  ALARM_MASK: 0x03,
  TAMPER_MASK: 0x04,
  LOW_BATTERY_MASK: 0x08,
};
