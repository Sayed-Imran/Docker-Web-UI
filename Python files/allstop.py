#!/usr/bin/python3
print("content-type: text/html")
print()


import subprocess as sp

    
a = sp.getstatusoutput("sudo docker stop $(sudo docker ps -q)")


if a[0] == 0:
    print("Container(s) Stopped Successfully..!!")

else:
    print("Something went wrong....!")
    print(a[1])

