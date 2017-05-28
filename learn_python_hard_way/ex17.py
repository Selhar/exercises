from sys import argv
from os.path import exists

script, from_file, to_file = argv

print "copying from %s to %s" % (from_file, to_file)

in_file = open(from_file).read()

print "Input file size: %d " % len(in_file)

print "Does the output file exist? %r" % exists(to_file)

out_file = open(to_file, 'w')
out_file.write(in_file)

out_file.close()