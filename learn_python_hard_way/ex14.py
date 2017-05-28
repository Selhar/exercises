from sys import argv

script, user_name = argv
prompt = '> '

print "Name:%s script:%s" % (user_name, script)
print "Question %s?" % user_name
likes = raw_input(prompt)

print "Question 2"
lives = raw_input(prompt)

print "Question 3"
computer = raw_input(prompt)

print """
Likes: %r
Lives in: %r
Computer: %r
""" % (likes, lives, computer)