#!/bin/bash
# Installs Redis

wget http://download.redis.io/redis-stable.tar.gz
tar xvzf redis-stable.tar.gz
cd redis-stable
make
sudo cp ./src/redis-server /usr/local/bin/
sudo cp ./src/redis-cli /usr/local/bin/

# Create default config file
mkdir /etc/redis
cat << 'EOF' > /etc/redis/redis.conf
daemonize no
EOF

# Create `redis` user
useradd redis

# Configure Upstart
cat << 'EOF' > /etc/init/redis.conf
description "Redis server"

start on runlevel [23]
stop on shutdown

exec sudo -u redis /usr/local/bin/redis-server /etc/redis/redis.conf

respawn
EOF

start redis

exit 0
