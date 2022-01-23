#!/usr/bin/python3

print("content-type: text/html")
print()

import cgi
import subprocess as sp

f = cgi.FieldStorage()

c = f.getvalue("x")

a = sp.getstatusoutput("sudo "+c)
if a[0] != 0:
    print("The Image is being used by some Containers")

else:
    print("Image Removed...")
