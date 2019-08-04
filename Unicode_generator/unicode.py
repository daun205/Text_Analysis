T = open("unicode_table.txt", "r")
F = open("unicode_obj.txt", "w")

uni_set = []
line = T.readline()
while line:
	line = line.split("	")
	print(line)
	uni_set.append(line)
	line = T.readline()

F.write("[")
for i in uni_set:
	F.write("[")
	for j in range(1,len(i)):
		## for each value
		if (j == 1):
			print(i[j])
			print(int('007F', 16))
			F.write(str(int(i[j],16)))
			F.write(",")
		else:
			F.write("'" + i[j].strip() + "'")
	F.write("],\n")
F.write("]")