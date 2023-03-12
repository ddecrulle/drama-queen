#!/bin/sh
echo "window._env_['VITE_QUEEN_URL'] = '$VITE_QUEEN_URL';" >> /usr/share/nginx/html/env-config.js
exec "$@"