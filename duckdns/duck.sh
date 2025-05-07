#!/bin/bash

while true; do
  echo "Updating DuckDNS..."
  current_ip=$(curl -s http://checkip.amazonaws.com)
  curl "https://www.duckdns.org/update?domains=cnp-blockchain-energyplus&token=ef7272b5-8646-44fe-8610-b69c5861cfdd&ip=$current_ip"
  sleep 300 
done