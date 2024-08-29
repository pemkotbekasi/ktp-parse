'use strict';

const {RawResponseHandler} = require('@rahadiana/node_response_standard')
const {nikParser} = require('nik-parser')

const ParseKTP = function (nik) {
    const Parse = nikParser(`${nik}`)

    if (Parse.isValid() == true) {
        const Resuts = {
            provinceId: Parse.provinceId(),
            province: Parse.province(),
            kabupatenKotaId: Parse.kabupatenKotaId(),
            kabupatenKota: Parse.kabupatenKota(),
            kecamatanId: Parse.kecamatanId(),
            kecamatan: Parse.kecamatan(),
            kodepos:Parse.kodepos(),
            kelamin:Parse.kelamin(),
            lahir:Parse.lahir(),
            uniqcode:Parse.uniqcode()
        }
        return RawResponseHandler(200, Resuts, 'sucess')
    } else {
        return RawResponseHandler(400, '', 'failed parse NIK')
    }
}

module.exports = ParseKTP