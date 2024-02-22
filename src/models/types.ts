export type Pool = { address: Address; weight?: number };

export type Address = string;

export enum LOAD_BALANCER_ALGORITHM {
  IP_HASH = "ip_hash",
  RANDOM = "random",
  LEAST_CONNECTIONS = "least_connections",
  ROUND_ROBIN = "round_robin",
}
