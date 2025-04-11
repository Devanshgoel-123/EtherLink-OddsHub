
 const abi= [
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_treasuryWallet",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "marketId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "categoryId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "betId",
        "type": "uint256"
      }
    ],
    "name": "ClaimWinnings",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "marketId",
        "type": "uint256"
      }
    ],
    "name": "CryptoMarketCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "marketId",
        "type": "uint256"
      }
    ],
    "name": "MarketCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "marketId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint8",
        "name": "outcome_index",
        "type": "uint8"
      }
    ],
    "name": "SettleCryptoMarket",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "marketId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint8",
        "name": "outcome_index",
        "type": "uint8"
      }
    ],
    "name": "SettleMarket",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "marketId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint8",
        "name": "outcome_index",
        "type": "uint8"
      }
    ],
    "name": "SettleSportsMarket",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "marketId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint8",
        "name": "outcome_index",
        "type": "uint8"
      },
      {
        "indexed": false,
        "internalType": "uint8",
        "name": "categoryId",
        "type": "uint8"
      }
    ],
    "name": "SharesBought",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "marketId",
        "type": "uint256"
      }
    ],
    "name": "SportsMarketCreated",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "admin",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "market_id",
        "type": "uint256"
      },
      {
        "internalType": "uint8",
        "name": "token_to_mint",
        "type": "uint8"
      },
      {
        "internalType": "uint8",
        "name": "market_type",
        "type": "uint8"
      }
    ],
    "name": "buy_shares",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "market_id",
        "type": "uint256"
      },
      {
        "internalType": "uint8",
        "name": "market_type",
        "type": "uint8"
      },
      {
        "internalType": "uint8",
        "name": "bet_num",
        "type": "uint8"
      }
    ],
    "name": "claim_winnings",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "description",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "outcome1",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "outcome2",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "category",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "image",
        "type": "string"
      },
      {
        "internalType": "uint64",
        "name": "deadline",
        "type": "uint64"
      },
      {
        "internalType": "uint8",
        "name": "conditions",
        "type": "uint8"
      },
      {
        "internalType": "uint64",
        "name": "priceKey",
        "type": "uint64"
      },
      {
        "internalType": "uint128",
        "name": "amount",
        "type": "uint128"
      }
    ],
    "name": "create_crypto_market",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "description",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "outcome1",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "outcome2",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "category",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "image",
        "type": "string"
      },
      {
        "internalType": "uint64",
        "name": "deadline",
        "type": "uint64"
      }
    ],
    "name": "create_market",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "description",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "outcome1",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "outcome2",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "category",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "image",
        "type": "string"
      },
      {
        "internalType": "uint64",
        "name": "deadline",
        "type": "uint64"
      },
      {
        "internalType": "uint64",
        "name": "api_event_id",
        "type": "uint64"
      },
      {
        "internalType": "bool",
        "name": "is_home",
        "type": "bool"
      }
    ],
    "name": "create_sports_market",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "crypto_markets",
    "outputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "market_id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "description",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "category",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "image",
        "type": "string"
      },
      {
        "internalType": "bool",
        "name": "is_settled",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "is_active",
        "type": "bool"
      },
      {
        "internalType": "uint64",
        "name": "deadline",
        "type": "uint64"
      },
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "bought_shares",
            "type": "uint256"
          }
        ],
        "internalType": "struct Outcome",
        "name": "winning_outcome",
        "type": "tuple"
      },
      {
        "internalType": "uint256",
        "name": "money_in_pool",
        "type": "uint256"
      },
      {
        "internalType": "uint8",
        "name": "conditions",
        "type": "uint8"
      },
      {
        "internalType": "uint64",
        "name": "price_key",
        "type": "uint64"
      },
      {
        "internalType": "uint128",
        "name": "amount",
        "type": "uint128"
      },
      {
        "internalType": "uint256",
        "name": "categoryId",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "crypto_markets_length",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "get_all_crypto_markets",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "market_id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "description",
            "type": "string"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "bought_shares",
                "type": "uint256"
              }
            ],
            "internalType": "struct Outcome[2]",
            "name": "outcomes",
            "type": "tuple[2]"
          },
          {
            "internalType": "string",
            "name": "category",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "image",
            "type": "string"
          },
          {
            "internalType": "bool",
            "name": "is_settled",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "is_active",
            "type": "bool"
          },
          {
            "internalType": "uint64",
            "name": "deadline",
            "type": "uint64"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "bought_shares",
                "type": "uint256"
              }
            ],
            "internalType": "struct Outcome",
            "name": "winning_outcome",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "money_in_pool",
            "type": "uint256"
          },
          {
            "internalType": "uint8",
            "name": "conditions",
            "type": "uint8"
          },
          {
            "internalType": "uint64",
            "name": "price_key",
            "type": "uint64"
          },
          {
            "internalType": "uint128",
            "name": "amount",
            "type": "uint128"
          },
          {
            "internalType": "uint256",
            "name": "categoryId",
            "type": "uint256"
          }
        ],
        "internalType": "struct CryptoMarket[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "get_all_markets",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "market_id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "description",
            "type": "string"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "bought_shares",
                "type": "uint256"
              }
            ],
            "internalType": "struct Outcome[2]",
            "name": "outcomes",
            "type": "tuple[2]"
          },
          {
            "internalType": "string",
            "name": "category",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "image",
            "type": "string"
          },
          {
            "internalType": "bool",
            "name": "is_settled",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "is_active",
            "type": "bool"
          },
          {
            "internalType": "uint64",
            "name": "deadline",
            "type": "uint64"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "bought_shares",
                "type": "uint256"
              }
            ],
            "internalType": "struct Outcome",
            "name": "winning_outcome",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "money_in_pool",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "categoryId",
            "type": "uint256"
          }
        ],
        "internalType": "struct Market[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "get_all_sports_markets",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "market_id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "description",
            "type": "string"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "bought_shares",
                "type": "uint256"
              }
            ],
            "internalType": "struct Outcome[2]",
            "name": "outcomes",
            "type": "tuple[2]"
          },
          {
            "internalType": "string",
            "name": "category",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "image",
            "type": "string"
          },
          {
            "internalType": "bool",
            "name": "is_settled",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "is_active",
            "type": "bool"
          },
          {
            "internalType": "uint64",
            "name": "deadline",
            "type": "uint64"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "bought_shares",
                "type": "uint256"
              }
            ],
            "internalType": "struct Outcome",
            "name": "winning_outcome",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "money_in_pool",
            "type": "uint256"
          },
          {
            "internalType": "uint64",
            "name": "api_event_id",
            "type": "uint64"
          },
          {
            "internalType": "bool",
            "name": "is_home",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "categoryId",
            "type": "uint256"
          }
        ],
        "internalType": "struct SportsMarket[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "get_treasury_wallet",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      }
    ],
    "name": "get_user_crypto_markets",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "market_id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "description",
            "type": "string"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "bought_shares",
                "type": "uint256"
              }
            ],
            "internalType": "struct Outcome[2]",
            "name": "outcomes",
            "type": "tuple[2]"
          },
          {
            "internalType": "string",
            "name": "category",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "image",
            "type": "string"
          },
          {
            "internalType": "bool",
            "name": "is_settled",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "is_active",
            "type": "bool"
          },
          {
            "internalType": "uint64",
            "name": "deadline",
            "type": "uint64"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "bought_shares",
                "type": "uint256"
              }
            ],
            "internalType": "struct Outcome",
            "name": "winning_outcome",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "money_in_pool",
            "type": "uint256"
          },
          {
            "internalType": "uint8",
            "name": "conditions",
            "type": "uint8"
          },
          {
            "internalType": "uint64",
            "name": "price_key",
            "type": "uint64"
          },
          {
            "internalType": "uint128",
            "name": "amount",
            "type": "uint128"
          },
          {
            "internalType": "uint256",
            "name": "categoryId",
            "type": "uint256"
          }
        ],
        "internalType": "struct CryptoMarket[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      }
    ],
    "name": "get_user_markets",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "market_id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "description",
            "type": "string"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "bought_shares",
                "type": "uint256"
              }
            ],
            "internalType": "struct Outcome[2]",
            "name": "outcomes",
            "type": "tuple[2]"
          },
          {
            "internalType": "string",
            "name": "category",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "image",
            "type": "string"
          },
          {
            "internalType": "bool",
            "name": "is_settled",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "is_active",
            "type": "bool"
          },
          {
            "internalType": "uint64",
            "name": "deadline",
            "type": "uint64"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "bought_shares",
                "type": "uint256"
              }
            ],
            "internalType": "struct Outcome",
            "name": "winning_outcome",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "money_in_pool",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "categoryId",
            "type": "uint256"
          }
        ],
        "internalType": "struct Market[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "userWallet",
        "type": "address"
      }
    ],
    "name": "get_user_positions_market",
    "outputs": [
      {
        "components": [
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                  },
                  {
                    "internalType": "uint256",
                    "name": "bought_shares",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct Outcome",
                "name": "outcome",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                  },
                  {
                    "internalType": "bool",
                    "name": "has_claimed",
                    "type": "bool"
                  }
                ],
                "internalType": "struct UserPosition",
                "name": "position",
                "type": "tuple"
              }
            ],
            "internalType": "struct UserBet",
            "name": "user_bet",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "market_id",
            "type": "uint256"
          },
          {
            "internalType": "uint64",
            "name": "deadline",
            "type": "uint64"
          },
          {
            "internalType": "uint256",
            "name": "money_in_pool",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "categoryId",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "is_settled",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "is_active",
            "type": "bool"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "bought_shares",
                "type": "uint256"
              }
            ],
            "internalType": "struct Outcome",
            "name": "winning_outcome",
            "type": "tuple"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "betId",
            "type": "uint256"
          }
        ],
        "internalType": "struct UserPositionsForMarket[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      }
    ],
    "name": "get_user_sports_markets",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "market_id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "description",
            "type": "string"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "bought_shares",
                "type": "uint256"
              }
            ],
            "internalType": "struct Outcome[2]",
            "name": "outcomes",
            "type": "tuple[2]"
          },
          {
            "internalType": "string",
            "name": "category",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "image",
            "type": "string"
          },
          {
            "internalType": "bool",
            "name": "is_settled",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "is_active",
            "type": "bool"
          },
          {
            "internalType": "uint64",
            "name": "deadline",
            "type": "uint64"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "bought_shares",
                "type": "uint256"
              }
            ],
            "internalType": "struct Outcome",
            "name": "winning_outcome",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "money_in_pool",
            "type": "uint256"
          },
          {
            "internalType": "uint64",
            "name": "api_event_id",
            "type": "uint64"
          },
          {
            "internalType": "bool",
            "name": "is_home",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "categoryId",
            "type": "uint256"
          }
        ],
        "internalType": "struct SportsMarket[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      }
    ],
    "name": "get_user_total_claimable",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "markets",
    "outputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "market_id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "description",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "category",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "image",
        "type": "string"
      },
      {
        "internalType": "bool",
        "name": "is_settled",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "is_active",
        "type": "bool"
      },
      {
        "internalType": "uint64",
        "name": "deadline",
        "type": "uint64"
      },
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "bought_shares",
            "type": "uint256"
          }
        ],
        "internalType": "struct Outcome",
        "name": "winning_outcome",
        "type": "tuple"
      },
      {
        "internalType": "uint256",
        "name": "money_in_pool",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "categoryId",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "markets_length",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "num_bets",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "wallet",
        "type": "address"
      }
    ],
    "name": "set_treasury_wallet",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "market_id",
        "type": "uint256"
      },
      {
        "internalType": "uint8",
        "name": "winning_outcome",
        "type": "uint8"
      }
    ],
    "name": "settle_crypto_market_manually",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "market_id",
        "type": "uint256"
      },
      {
        "internalType": "uint8",
        "name": "winning_outcome",
        "type": "uint8"
      }
    ],
    "name": "settle_market",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "market_id",
        "type": "uint256"
      },
      {
        "internalType": "uint8",
        "name": "winning_outcome",
        "type": "uint8"
      }
    ],
    "name": "settle_sports_market",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "sport_markets",
    "outputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "market_id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "description",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "category",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "image",
        "type": "string"
      },
      {
        "internalType": "bool",
        "name": "is_settled",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "is_active",
        "type": "bool"
      },
      {
        "internalType": "uint64",
        "name": "deadline",
        "type": "uint64"
      },
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "bought_shares",
            "type": "uint256"
          }
        ],
        "internalType": "struct Outcome",
        "name": "winning_outcome",
        "type": "tuple"
      },
      {
        "internalType": "uint256",
        "name": "money_in_pool",
        "type": "uint256"
      },
      {
        "internalType": "uint64",
        "name": "api_event_id",
        "type": "uint64"
      },
      {
        "internalType": "bool",
        "name": "is_home",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "categoryId",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "sports_markets_length",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "market_id",
        "type": "uint256"
      },
      {
        "internalType": "uint8",
        "name": "category",
        "type": "uint8"
      }
    ],
    "name": "toggle_market",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "user_bets",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "bought_shares",
            "type": "uint256"
          }
        ],
        "internalType": "struct Outcome",
        "name": "outcome",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "has_claimed",
            "type": "bool"
          }
        ],
        "internalType": "struct UserPosition",
        "name": "position",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]
  export default abi;