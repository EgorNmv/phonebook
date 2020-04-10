import {Environment, Network, RecordSource, Store} from "relay-runtime";

const store: Store = new Store(new RecordSource());
const network: any = Network.create((operation, variables) => {
    return fetch("http://localhost:8080/graphql", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: operation.text,
            variables,
        }),
    }).then(response => {
        return response.json();
    })
});

const environment: Environment = new Environment({
    network,
    store
});

export default environment;