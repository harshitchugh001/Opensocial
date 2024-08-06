# This is for the local ledger setup not for the main net

# Create identities
dfx identity new minter --disable-encryption || true
dfx identity new reciever --disable-encryption || true
dfx identity new testing --disable-encryption || true

dfx identity use default

MINTER=$(dfx --identity minter identity get-principal)
DEFAULT=$(dfx --identity default identity get-principal)
RECIEVER=$(dfx --identity reciever identity get-principal)
TOKEN_SYMBOL=Time
TOKEN_NAME="time_token"
TRANSFER_FEE=100
PRE_MINTED_TOKENS=10000000000000

dfx deploy ledger --argument "(variant {Init = 
record {
     token_symbol = \"time\";
     token_name = \"time_token\";
     minting_account = record { owner = principal \"gelwp-gaysy-pgvzl-h3772-nwy6h-iof3r-5ld2o-hvd7r-6cfg4-i5jnb-bqe\" };
     transfer_fee = 100;
     metadata = vec {};
     initial_balances = vec { record { record { owner = principal \"gelwp-gaysy-pgvzl-h3772-nwy6h-iof3r-5ld2o-hvd7r-6cfg4-i5jnb-bqe\"; }; 1000000000000000000 }; };
     archive_options = record {
         num_blocks_to_archive = 1000000000;
         trigger_threshold = 1000000000;
         controller_id = principal \"gelwp-gaysy-pgvzl-h3772-nwy6h-iof3r-5ld2o-hvd7r-6cfg4-i5jnb-bqe\";
     };
     feature_flags = opt record {icrc2 = true;};
 }
})"

dfx deploy ledger --argument "(variant {Init = 
record {
     token_symbol = \"Time\";
     token_name = \"time_token\";
     minting_account = record { owner = principal \"wsia5-6ckwa-lx5aq-ky57y-jgniw-ezqy4-5jkes-bjkdd-zneku-c4rvw-dae\" };
     transfer_fee = 100;
     metadata = vec {};
     initial_balances = vec { record { record { owner = principal \"wsia5-6ckwa-lx5aq-ky57y-jgniw-ezqy4-5jkes-bjkdd-zneku-c4rvw-dae\";  100000000000; }; };
     archive_options = record {
         num_blocks_to_archive = 1000000000;
         trigger_threshold = 1000000000;
         controller_id = principal \"wsia5-6ckwa-lx5aq-ky57y-jgniw-ezqy4-5jkes-bjkdd-zneku-c4rvw-dae\";
        };
     feature_flags = opt record {icrc2 = true;};
 }
})"