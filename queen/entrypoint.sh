#!/bin/sh
echo "window._env_['QUEEN_URL'] = '$QUEEN_URL';" >> /usr/share/nginx/html/env-config.js
exec "$@"