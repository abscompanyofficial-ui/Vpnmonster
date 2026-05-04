{
  "dns": {
    "servers": [
      "1.1.1.1",
      "https://dns.adguard.com/dns-query"
    ],
    "queryStrategy": "UseIPv4"
  },
  "routing": {
    "rules": [
      {
        "type": "field",
        "domain": [
          "geosite:category-ads-all"
        ],
        "outboundTag": "block"
      },
      {
        "type": "field",
        "protocol": [
          "bittorrent"
        ],
        "outboundTag": "direct"
      },
      {
        "type": "field",
        "network": "tcp,udp",
        "balancerTag": "Balancer"
      }
    ],
    "balancers": [
      {
        "tag": "Balancer",
        "selector": [
          "proxy"
        ],
        "strategy": {
          "type": "leastLoad",
          "settings": {
            "maxRTT": "1s",
            "expected": 2,
            "baselines": [
              "1s"
            ],
            "tolerance": 60.01
          }
        },
        "fallbackTag": "direct"
      }
    ],
    "domainMatcher": "hybrid",
    "domainStrategy": "IPIfNonMatch"
  },
  "inbounds": [
    {
      "tag": "socks",
      "port": 10808,
      "listen": "127.0.0.1",
      "protocol": "socks",
      "settings": {
        "udp": true,
        "auth": "noauth"
      },
      "sniffing": {
        "enabled": true,
        "routeOnly": false,
        "destOverride": [
          "http",
          "tls",
          "quic"
        ]
      }
    },
    {
      "tag": "http",
      "port": 10809,
      "listen": "127.0.0.1",
      "protocol": "http",
      "settings": {
        "allowTransparent": false
      },
      "sniffing": {
        "enabled": true,
        "routeOnly": false,
        "destOverride": [
          "http",
          "tls",
          "quic"
        ]
      }
    }
  ],
  "outbounds": [
    {
      "tag": "proxy",
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "178.250.243.231",
            "port": 8443,
            "users": [
              {
                "id": "53406953-6c67-4b0c-b0a7-70dd5d2c6363",
                "encryption": "none",
                "flow": "xtls-rprx-vision"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "tcp",
        "tcpSettings": {},
        "security": "reality",
        "realitySettings": {
          "serverName": "ads.x5.ru",
          "show": false,
          "publicKey": "lCwVDvngXM3kLz86XpOJmZ46coOVaV7Kl7vB7cCPeQI",
          "shortId": "a20d3ed244c76426",
          "fingerprint": "qq"
        }
      }
    },
    {
      "tag": "proxy-2",
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "178.250.243.232",
            "port": 8443,
            "users": [
              {
                "id": "53406953-6c67-4b0c-b0a7-70dd5d2c6363",
                "encryption": "none",
                "flow": "xtls-rprx-vision"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "tcp",
        "tcpSettings": {},
        "security": "reality",
        "realitySettings": {
          "serverName": "web.max.ru",
          "show": false,
          "publicKey": "lCwVDvngXM3kLz86XpOJmZ46coOVaV7Kl7vB7cCPeQI",
          "shortId": "a20d3ed244c76426",
          "fingerprint": "qq"
        }
      }
    },
    {
      "tag": "proxy-3",
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "178.250.243.234",
            "port": 8443,
            "users": [
              {
                "id": "53406953-6c67-4b0c-b0a7-70dd5d2c6363",
                "encryption": "none",
                "flow": "xtls-rprx-vision"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "tcp",
        "tcpSettings": {},
        "security": "reality",
        "realitySettings": {
          "serverName": "max.ru",
          "show": false,
          "publicKey": "lCwVDvngXM3kLz86XpOJmZ46coOVaV7Kl7vB7cCPeQI",
          "shortId": "a20d3ed244c76426",
          "fingerprint": "qq"
        }
      }
    },
    {
      "tag": "proxy-4",
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "178.250.243.235",
            "port": 8443,
            "users": [
              {
                "id": "53406953-6c67-4b0c-b0a7-70dd5d2c6363",
                "encryption": "none",
                "flow": "xtls-rprx-vision"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "tcp",
        "tcpSettings": {},
        "security": "reality",
        "realitySettings": {
          "serverName": "yandex.ru",
          "show": false,
          "publicKey": "lCwVDvngXM3kLz86XpOJmZ46coOVaV7Kl7vB7cCPeQI",
          "shortId": "a20d3ed244c76426",
          "fingerprint": "qq"
        }
      }
    },
    {
      "tag": "proxy-5",
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "178.250.243.237",
            "port": 8443,
            "users": [
              {
                "id": "53406953-6c67-4b0c-b0a7-70dd5d2c6363",
                "encryption": "none",
                "flow": "xtls-rprx-vision"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "tcp",
        "tcpSettings": {},
        "security": "reality",
        "realitySettings": {
          "serverName": "sun6-22.userapi.com",
          "show": false,
          "publicKey": "lCwVDvngXM3kLz86XpOJmZ46coOVaV7Kl7vB7cCPeQI",
          "shortId": "a20d3ed244c76426",
          "fingerprint": "qq"
        }
      }
    },
    {
      "tag": "proxy-6",
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "178.250.242.13",
            "port": 8443,
            "users": [
              {
                "id": "53406953-6c67-4b0c-b0a7-70dd5d2c6363",
                "encryption": "none",
                "flow": "xtls-rprx-vision"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "tcp",
        "tcpSettings": {},
        "security": "reality",
        "realitySettings": {
          "serverName": "ads.x5.ru",
          "show": false,
          "publicKey": "lCwVDvngXM3kLz86XpOJmZ46coOVaV7Kl7vB7cCPeQI",
          "shortId": "a20d3ed244c76426",
          "fingerprint": "qq"
        }
      }
    },
    {
      "tag": "proxy-7",
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "178.250.242.67",
            "port": 8443,
            "users": [
              {
                "id": "53406953-6c67-4b0c-b0a7-70dd5d2c6363",
                "encryption": "none",
                "flow": "xtls-rprx-vision"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "tcp",
        "tcpSettings": {},
        "security": "reality",
        "realitySettings": {
          "serverName": "io.ozone.ru",
          "show": false,
          "publicKey": "lCwVDvngXM3kLz86XpOJmZ46coOVaV7Kl7vB7cCPeQI",
          "shortId": "a20d3ed244c76426",
          "fingerprint": "qq"
        }
      }
    },
    {
      "tag": "proxy-8",
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "84.201.155.222",
            "port": 8443,
            "users": [
              {
                "id": "53406953-6c67-4b0c-b0a7-70dd5d2c6363",
                "encryption": "none",
                "flow": "xtls-rprx-vision"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "tcp",
        "tcpSettings": {},
        "security": "reality",
        "realitySettings": {
          "serverName": "ads.x5.ru",
          "show": false,
          "publicKey": "lCwVDvngXM3kLz86XpOJmZ46coOVaV7Kl7vB7cCPeQI",
          "shortId": "a20d3ed244c76426",
          "fingerprint": "qq"
        }
      }
    },
    {
      "tag": "proxy-9",
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "87.242.102.193",
            "port": 8443,
            "users": [
              {
                "id": "53406953-6c67-4b0c-b0a7-70dd5d2c6363",
                "encryption": "none",
                "flow": "xtls-rprx-vision"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "tcp",
        "tcpSettings": {},
        "security": "reality",
        "realitySettings": {
          "serverName": "yandex.ru",
          "show": false,
          "publicKey": "lCwVDvngXM3kLz86XpOJmZ46coOVaV7Kl7vB7cCPeQI",
          "shortId": "a20d3ed244c76426",
          "fingerprint": "qq"
        }
      }
    },
    {
      "tag": "proxy-10",
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "45.145.40.61",
            "port": 7443,
            "users": [
              {
                "id": "53406953-6c67-4b0c-b0a7-70dd5d2c6363",
                "encryption": "none",
                "flow": "xtls-rprx-vision"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "tcp",
        "tcpSettings": {},
        "security": "reality",
        "realitySettings": {
          "serverName": "speed.overload.ovh",
          "show": false,
          "publicKey": "lCwVDvngXM3kLz86XpOJmZ46coOVaV7Kl7vB7cCPeQI",
          "shortId": "a20d3ed244c76426",
          "fingerprint": "chrome"
        }
      }
    },
    {
      "tag": "proxy-11",
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "79.174.92.111",
            "port": 8443,
            "users": [
              {
                "id": "53406953-6c67-4b0c-b0a7-70dd5d2c6363",
                "encryption": "none",
                "flow": "xtls-rprx-vision"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "tcp",
        "tcpSettings": {},
        "security": "reality",
        "realitySettings": {
          "serverName": "ads.x5.ru",
          "show": false,
          "publicKey": "lCwVDvngXM3kLz86XpOJmZ46coOVaV7Kl7vB7cCPeQI",
          "shortId": "a20d3ed244c76426",
          "fingerprint": "qq"
        }
      }
    },
    {
      "tag": "proxy-12",
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "79.174.92.44",
            "port": 8443,
            "users": [
              {
                "id": "53406953-6c67-4b0c-b0a7-70dd5d2c6363",
                "encryption": "none",
                "flow": "xtls-rprx-vision"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "tcp",
        "tcpSettings": {},
        "security": "reality",
        "realitySettings": {
          "serverName": "ads.x5.ru",
          "show": false,
          "publicKey": "lCwVDvngXM3kLz86XpOJmZ46coOVaV7Kl7vB7cCPeQI",
          "shortId": "a20d3ed244c76426",
          "fingerprint": "qq"
        }
      }
    },
    {
      "tag": "proxy-13",
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "79.174.92.178",
            "port": 8443,
            "users": [
              {
                "id": "53406953-6c67-4b0c-b0a7-70dd5d2c6363",
                "encryption": "none",
                "flow": "xtls-rprx-vision"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "tcp",
        "tcpSettings": {},
        "security": "reality",
        "realitySettings": {
          "serverName": "ads.x5.ru",
          "show": false,
          "publicKey": "lCwVDvngXM3kLz86XpOJmZ46coOVaV7Kl7vB7cCPeQI",
          "shortId": "a20d3ed244c76426",
          "fingerprint": "qq"
        }
      }
    },
    {
      "tag": "proxy-14",
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "79.174.91.187",
            "port": 8443,
            "users": [
              {
                "id": "53406953-6c67-4b0c-b0a7-70dd5d2c6363",
                "encryption": "none",
                "flow": "xtls-rprx-vision"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "tcp",
        "tcpSettings": {},
        "security": "reality",
        "realitySettings": {
          "serverName": "ads.x5.ru",
          "show": false,
          "publicKey": "lCwVDvngXM3kLz86XpOJmZ46coOVaV7Kl7vB7cCPeQI",
          "shortId": "a20d3ed244c76426",
          "fingerprint": "qq"
        }
      }
    },
    {
      "tag": "proxy-15",
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "79.174.94.87",
            "port": 8443,
            "users": [
              {
                "id": "53406953-6c67-4b0c-b0a7-70dd5d2c6363",
                "encryption": "none",
                "flow": "xtls-rprx-vision"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "tcp",
        "tcpSettings": {},
        "security": "reality",
        "realitySettings": {
          "serverName": "ads.x5.ru",
          "show": false,
          "publicKey": "lCwVDvngXM3kLz86XpOJmZ46coOVaV7Kl7vB7cCPeQI",
          "shortId": "a20d3ed244c76426",
          "fingerprint": "qq"
        }
      }
    },
    {
      "tag": "proxy-16",
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "79.174.95.130",
            "port": 8443,
            "users": [
              {
                "id": "53406953-6c67-4b0c-b0a7-70dd5d2c6363",
                "encryption": "none",
                "flow": "xtls-rprx-vision"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "tcp",
        "tcpSettings": {},
        "security": "reality",
        "realitySettings": {
          "serverName": "ads.x5.ru",
          "show": false,
          "publicKey": "lCwVDvngXM3kLz86XpOJmZ46coOVaV7Kl7vB7cCPeQI",
          "shortId": "a20d3ed244c76426",
          "fingerprint": "qq"
        }
      }
    },
    {
      "tag": "proxy-17",
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "79.174.92.203",
            "port": 8443,
            "users": [
              {
                "id": "53406953-6c67-4b0c-b0a7-70dd5d2c6363",
                "encryption": "none",
                "flow": "xtls-rprx-vision"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "tcp",
        "tcpSettings": {},
        "security": "reality",
        "realitySettings": {
          "serverName": "ads.x5.ru",
          "show": false,
          "publicKey": "lCwVDvngXM3kLz86XpOJmZ46coOVaV7Kl7vB7cCPeQI",
          "shortId": "a20d3ed244c76426",
          "fingerprint": "qq"
        }
      }
    },
    {
      "tag": "proxy-18",
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "79.174.93.133",
            "port": 8443,
            "users": [
              {
                "id": "53406953-6c67-4b0c-b0a7-70dd5d2c6363",
                "encryption": "none",
                "flow": "xtls-rprx-vision"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "tcp",
        "tcpSettings": {},
        "security": "reality",
        "realitySettings": {
          "serverName": "ads.x5.ru",
          "show": false,
          "publicKey": "lCwVDvngXM3kLz86XpOJmZ46coOVaV7Kl7vB7cCPeQI",
          "shortId": "a20d3ed244c76426",
          "fingerprint": "qq"
        }
      }
    },
    {
      "tag": "proxy-19",
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "79.174.92.232",
            "port": 8443,
            "users": [
              {
                "id": "53406953-6c67-4b0c-b0a7-70dd5d2c6363",
                "encryption": "none",
                "flow": "xtls-rprx-vision"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "tcp",
        "tcpSettings": {},
        "security": "reality",
        "realitySettings": {
          "serverName": "ads.x5.ru",
          "show": false,
          "publicKey": "lCwVDvngXM3kLz86XpOJmZ46coOVaV7Kl7vB7cCPeQI",
          "shortId": "a20d3ed244c76426",
          "fingerprint": "qq"
        }
      }
    },
    {
      "tag": "direct",
      "protocol": "freedom"
    },
    {
      "tag": "block",
      "protocol": "blackhole"
    }
  ],
  "burstObservatory": {
    "pingConfig": {
      "timeout": "10s",
      "interval": "10m",
      "sampling": 2,
      "destination": "http://www.gstatic.com/generate_204",
      "connectivity": ""
    },
    "subjectSelector": [
      "proxy"
    ]
  },
  "remarks": "🇷🇺 сервер #1 |@white_anonymity"
}