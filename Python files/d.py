#!/usr/bin/python3

print("content-type: text/html")
print()

import cgi
import subprocess as sp

f = cgi.FieldStorage()

c = f.getvalue("x")

a = sp.getoutput("sudo "+c)
print(a)
