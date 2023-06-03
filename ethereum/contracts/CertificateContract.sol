// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CertificateContract {
    string[] public certificates;

    function addCertificate(string memory newCertificateUUID) public {
        certificates.push(newCertificateUUID);
    }

    function findCertificate(string memory search) public view returns (bool) {
        for (uint i = 0; i < certificates.length; i++) {
            if (keccak256(bytes(certificates[i])) == keccak256(bytes(search))) {
                return true;
            }
        }
        return false;
    }

    function getCertificateCount() public view returns (uint) {
        return certificates.length;
    }
}
