#!/usr/bin/python3

print("content-type: text/html")
print()

import subprocess as sp

a = sp.getstatusoutput('sudo docker start $(sudo docker ps  -q --filter "status=exited")')
if a[0] == 0:
    print("Container(s) started successfully...!!!")

else:
    print("Something went wrong...")
    print(a[1])
