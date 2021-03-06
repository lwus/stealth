/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet';
import * as definedTypes from '../types';
export type CandyMachineData = {
  uuid: string;
  price: beet.bignum;
  symbol: string;
  sellerFeeBasisPoints: number;
  maxSupply: beet.bignum;
  isMutable: boolean;
  retainAuthority: boolean;
  goLiveDate: beet.COption<beet.bignum>;
  endSettings: beet.COption<definedTypes.EndSettings>;
  creators: definedTypes.Creator[];
  hiddenSettings: beet.COption<definedTypes.HiddenSettings>;
  whitelistMintSettings: beet.COption<definedTypes.WhitelistMintSettings>;
  itemsAvailable: beet.bignum;
  gatekeeper: beet.COption<definedTypes.GatekeeperConfig>;
};

/**
 * @category userTypes
 * @category generated
 */
export const candyMachineDataBeet = new beet.FixableBeetArgsStruct<CandyMachineData>(
  [
    ['uuid', beet.utf8String],
    ['price', beet.u64],
    ['symbol', beet.utf8String],
    ['sellerFeeBasisPoints', beet.u16],
    ['maxSupply', beet.u64],
    ['isMutable', beet.bool],
    ['retainAuthority', beet.bool],
    ['goLiveDate', beet.coption(beet.i64)],
    ['endSettings', beet.coption(definedTypes.endSettingsBeet)],
    ['creators', beet.array(definedTypes.creatorBeet)],
    ['hiddenSettings', beet.coption(definedTypes.hiddenSettingsBeet)],
    ['whitelistMintSettings', beet.coption(definedTypes.whitelistMintSettingsBeet)],
    ['itemsAvailable', beet.u64],
    ['gatekeeper', beet.coption(definedTypes.gatekeeperConfigBeet)],
  ],
  'CandyMachineData',
);
