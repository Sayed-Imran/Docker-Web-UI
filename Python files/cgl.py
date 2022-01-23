#!/usr/bin/python3
print("content-type: text/html")
print()

import cgi
import subprocess as sp


f = cgi.FieldStorage()
h = cgi.FieldStorage()

fg = f.getvalue("name")
g = h.getvalue("image")

if fg == None:
    a = sp.getstatusoutput("sudo docker run -dit  {}".format(g))

else:
    a = sp.getstatusoutput("sudo docker run -dit --name {} {}".format(fg,g))

if a[0] == 0:
    print("Container Launched successfully....")

else:
    print("There was a problem in launching the container")
    print(a[1])
