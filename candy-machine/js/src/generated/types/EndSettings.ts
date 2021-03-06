/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as definedTypes from '../types';
import * as beet from '@metaplex-foundation/beet';
export type EndSettings = {
  endSettingType: definedTypes.EndSettingType;
  number: beet.bignum;
};

/**
 * @category userTypes
 * @category generated
 */
export const endSettingsBeet = new beet.BeetArgsStruct<EndSettings>(
  [
    ['endSettingType', definedTypes.endSettingTypeBeet],
    ['number', beet.u64],
  ],
  'EndSettings',
);
