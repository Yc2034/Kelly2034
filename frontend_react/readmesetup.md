
===== sanity ======

mkdir backend_sanity

sudo npm install -g @sanity/cli
 sanity init --coupon javascriptmastery2022

sanity start

=== react ===
mkdir frontend_react

npm install @sanity/client @sanity/image-url framer-motion node-sass react-icons react-tooltip


==== connect react-sanity =======
cd backend_sanity

sanity manage

add localhost:3000 with CORS
create api token

create .env file
REACT_APP_SANITY_PROJECT_ID = 
REACT_APP_SANITY_TOKEN = 

reload, configure data in sanity


sanity experiences section for setup work exp

===== deploy ====
in react folder: 

npm run build

netlify


https://kelly2034.netlify.app/