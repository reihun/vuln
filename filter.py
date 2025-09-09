# Read input file
input_file = "endpoint.txt"  # Replace with your input file name

# Read lines from the file and strip whitespace
with open(input_file, 'r') as file:
    lines = [line.strip() for line in file if line.strip()]

# Extract endpoint by removing the index part (everything before " - ")
for line in lines:
    endpoint = line.split(" - ", 1)[1]  # Split on first " - " and take the second part
    print(endpoint)
