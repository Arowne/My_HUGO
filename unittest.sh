echo "\n"
hugo new associations/foo.md
FILENAME="content/associations/foo.md"
title="title: \"\""
domain="domain: \"\""
address="address : \"\""
description="description: \"\""
photo="photo: \"/img/association.jpg\""
important="important: false"

if [ "$(grep "$title"  "$FILENAME" )" != "" ]; then
    echo "found: $title"
else
    echo "\033[31m TEST FAILED: \"$title\" \033[0m"
fi

if [ "$(grep "$domain"  "$FILENAME" )" != "" ]; then
    echo "found: $domain"
else
   echo "\033[31m TEST FAILED: \"$domain\" \033[0m"
fi

if [ "$(grep "$address"  "$FILENAME" )" != "" ]; then
    echo "found: $address"
else
    echo "\033[31m TEST FAILED: \"$address\" \033[0m"
fi

if [ "$(grep "$description"  "$FILENAME" )" != "" ]; then
    echo "found: $description"
else
    echo "\033[31m TEST FAILED: \"$description\" \033[0m"
fi

if [ "$(grep "$photo"  "$FILENAME" )" != "" ]; then
    echo "found: $photo"
else
    echo "\033[31m TEST FAILED: \"$photo\" \033[0m"
fi

if [ "$(grep "$important"  "$FILENAME" )" != "" ]; then
    echo "found: $important"
else
    echo "\033[31m TEST FAILED: \"$important\" \033[0m"
fi

echo "\033[34m ASSOCIATIONS TEST DONE \033[0m "
sudo rm $FILENAME

echo "\n"
hugo new events/foo.md
FILENAME="content/events/foo.md"
title="title: \"\""
address="address: \"\""
postalCode="postalCode: \"75000\""
city="city: \"Paris\""
label="label: \"\""
description="description: \"\""
photos="photos: \"\""
association="association: \"paris-organisation\""
draft="draft: false"
important="important: false"

if [ "$(grep "$title"  "$FILENAME" )" != "" ]; then
    echo "found: $title"
else
    echo "\033[31m TEST FAILED: \"$title\" \033[0m"
fi

if [ "$(grep "$address"  "$FILENAME" )" != "" ]; then
    echo "found: $address"
else
   echo "\033[31m TEST FAILED: \"$address\" \033[0m"
fi

if [ "$(grep "$postalCode"  "$FILENAME" )" != "" ]; then
    echo "found: $postalCode"
else
    echo "\033[31m TEST FAILED: \"$postalCode\" \033[0m"
fi

if [ "$(grep "$city"  "$FILENAME" )" != "" ]; then
    echo "found: $city"
else
    echo "\033[31m TEST FAILED: \"$city\" \033[0m"
fi

if [ "$(grep "$label"  "$FILENAME" )" != "" ]; then
    echo "found: $label"
else
    echo "\033[31m TEST FAILED: \"$label\" \033[0m"
fi

if [ "$(grep "$description"  "$FILENAME" )" != "" ]; then
    echo "found: $description"
else
    echo "\033[31m TEST FAILED: \"$description\" \033[0m"
fi

if [ "$(grep "$photos"  "$FILENAME" )" != "" ]; then
    echo "found: $photos"
else
    echo "\033[31m TEST FAILED: \"$photos\" \033[0m"
fi

if [ "$(grep "$important"  "$FILENAME" )" != "" ]; then
    echo "found: $important"
else
    echo "\033[31m TEST FAILED: \"$important\" \033[0m"
fi

if [ "$(grep "$draft"  "$FILENAME" )" != "" ]; then
    echo "found: $draft"
else
    echo "\033[31m TEST FAILED: \"$draft\" \033[0m"
fi

if [ "$(grep "$association"  "$FILENAME" )" != "" ]; then
    echo "found: $association"
else
    echo "\033[31m TEST FAILED: \"$association\" \033[0m"
fi

echo "\033[34m EVENTS TEST DONE \033[0m "
sudo rm $FILENAME

echo "\n"
hugo new conseil-municipal/foo.md
FILENAME="content/conseil-municipal/foo.md"
firstname="firstName: \"\""
lastname="lastName: \"\""
role="role : \"Deputy\""
photos="photos: \"/img/profil.png\""

if [ "$(grep "$firstname"  "$FILENAME" )" != "" ]; then
    echo "found: $firstname"
else
    echo "\033[31m TEST FAILED: \"$firstname\" \033[0m"
fi

if [ "$(grep "$lastname"  "$FILENAME" )" != "" ]; then
    echo "found: $lastname"
else
   echo "\033[31m TEST FAILED: \"$lastname\" \033[0m"
fi

if [ "$(grep "$role"  "$FILENAME" )" != "" ]; then
    echo "found: $role"
else
    echo "\033[31m TEST FAILED: \"$role\" \033[0m"
fi

if [ "$(grep "$photos"  "$FILENAME" )" != "" ]; then
    echo "found: $photos"
else
    echo "\033[31m TEST FAILED: \"$photos\" \033[0m"
fi

echo "\033[34m MUNICIPAL COUNCIL TEST DONE \033[0m "
sudo rm $FILENAME