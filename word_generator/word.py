F = open('all_words.txt', 'r')

R = open('all_word_data.txt', 'w')
line = F.readline()

R.write("[")
while line:
	if line != "":
		### this has something
		R.write('	"' + line.strip() + '"')
		R.write(',\n')

	line = F.readline()

R.write("]")