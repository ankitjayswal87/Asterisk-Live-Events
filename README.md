# Asterisk-Live-Events
Gives live call status, of Asterisk PBX.

##########  by Ankit Jayswal, Email: ankitjayswal87@gmail.com ### Asterisk Live Call Status ### Date: 16-Aug-2015 ###############

Dependency Needed to be installed:

This project based on nodejs code and HTML,
You should be ready with installation of following nodejs npm modules on your system.
- npm install asterisk.io
- npm install socket.io
- npm install express

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

4. Browse http://localhost:3000/  you can see live call status monitoring web page

5. Now do some events, like calling, with registered soft phones and observe it.



Feel Free to ask any query at: ankitjayswal87@gmail.com
