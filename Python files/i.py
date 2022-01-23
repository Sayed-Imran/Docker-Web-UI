#!/usr/bin/python3

print("content-type: text/html")
print()

import cgi
import subprocess as sp

f = cgi.FieldStorage()

c = f.getvalue("x")
ac = sp.getoutput("sudo docker ps")
b = sp.getoutput("sudo docker ps| awk  '{print $2}'")
if c in b:
    print("Some of the Containers are using this image")
    print("Check in the active/inactive containers box for the required")
    print("Please delete/remove the Containers first in order to delete the Image")
else:
    print("Deleting the Image")
    a =  sp.getoutput("sudo docker rmi {}".format(c))
    print(a)

