#!/bin/sh
echo "window._env_['VITE_QUEEN_URL'] = '$VITE_QUEEN_URL';" >> /usr/share/nginx/html/env-config.js
echo "window._env_['VITE_QUEEN_V2_URL'] = '$VITE_QUEEN_V2_URL';" >> /usr/share/nginx/html/env-config.js
echo "window._env_['VITE_CAMPAIGN_ID_V2'] = '$VITE_CAMPAIGN_ID_V2';" >> /usr/share/nginx/html/env-config.js
exec "$@"