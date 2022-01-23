#!/usr/bin/python3
print("content-type: text/html")
print()

import cgi
import subprocess as sp
f = cgi.FieldStorage()
c = f.getvalue("x")
c = c.split(' ')

a = sp.getstatusoutput("sudo docker rm {}".format(c[0]))

if a[0] == 0:
    print("Container Removed Successfully..!!")

else:
    print("Something went wrong")
    print(a[1])

