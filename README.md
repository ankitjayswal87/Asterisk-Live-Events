# Asterisk-Live-Events
Gives live call status, of Asterisk PBX.

##########  by Ankit Jayswal, Email: ankitjayswal87@gmail.com ### Asterisk Live Call Status ### Date: 16-Aug-2015 ###############

Dependency Needed to be installed:
First, Setup nodejs environment on your Ubuntu system

apt-get update

apt-get install nodejs

apt-get install npm

Reference Link: https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-an-ubuntu-14-04-server

Now you need to install following node modules with help of NPM (Node Package Manager)
Install following node modules with folowing commands,

npm install asterisk.io

npm install socket.io

npm install express

How to Use:
My nodejs server code and Asterisk box are on same host

1. Update manager.conf file as per below, in your asterisk server resides at /etc/asterisk/manager.conf

[general]

enabled = yes

webenabled = yes

port = 5038

bindaddr = 0.0.0.0


[mark]

secret = mysecret

deny=0.0.0.0/0.0.0.0

permit=0.0.0.0/0.0.0.0

read = all

write = all

2. Replace IP address in server.js file with your asterisk box IP address.

3. Run server.js file as below

	nodejs server.js

4. Browse http://IP:3000/  you can see live call status monitoring web page

5. Now, call between registered two soft phones called 1000 and 1001, you can see calling, ringing, on call etc events.



Feel Free to ask any query at: ankitjayswal87@gmail.com
