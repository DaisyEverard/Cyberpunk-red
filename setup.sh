!/bin/bash
if [ ! -f requirements.txt ]; then
    echo "requirements.txt not found!"
    exit 1
fi
# Read each line from requirements.txt and install the package using pip
while IFS= read -r package
do
  echo "$package"
done < requirements.txt
echo "All packages installed.".