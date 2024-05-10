import React, { useState } from 'react';
import { ethers } from 'ethers';

const ContractInteraction = ({ signer, abi, address }) => {
    const [contractMethod, setContractMethod] = useState('');
    const [params, setParams] = useState('');
    const [response, setResponse] = useState(null);

    const contract = new ethers.Contract(address, abi, signer);

    const handleMethodChange = (event) => setContractMethod(event.target.value);
    const handleParamsChange = (event) => setParams(event.target.value.split(','));

    const interactWithContract = async () => {
        try {
            const method = contract[contractMethod];
            const txResponse = await method(...params);
            const receipt = await txResponse.wait();
            setResponse(receipt);
        } catch (error) {
            console.error('Error interacting with contract:', error);
        }
    };

    return (
        <div>
            <input type="text" value={contractMethod} onChange={handleMethodChange} placeholder="Method Name" />
            <input type="text" value={params.join(',')} onChange={handleParamsChange} placeholder="Params, separated by comma" />
            <button onClick={interactWithContract}>Execute</button>
            {response && <div><pre>{JSON.stringify(response, null, 2)}</pre></div>}
        </div>
    );
};

export default ContractInteraction;
