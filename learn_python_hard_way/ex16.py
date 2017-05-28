from sys import argv
script, filename = argv

print "Erase: %r" % filename

print "Opening file..."
target = open(filename, 'w')
target.truncate()

line1 = raw_input("Line 1 ")
line2 = raw_input("Line 2 ")
line3 = raw_input("Line 3 ")

target.write(line1 + "\n" + line2 + "\n" + line3 + "\n")

print("done")
target.close()
