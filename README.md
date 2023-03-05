# Google Sheets changes notification :mailbox:
When something in a **table** or in a specific **column/row/cell** is changed, an **app script** for **Google Sheets**:bar_chart:  will notify the user through a **Telegram bot**.

Below are instructions for setting up a script, bot, and changing the script for your use (for use with a specific **column**, **row**, or **cell**).

## How to set up
#### For script working, you need to create bot through Telegram [@BotFather](https://t.me/BotFather) by following these steps:

1. Write to [@BotFather](https://t.me/BotFather) command */start*
2. Now create new bot with command */newbot*
3. Give bot a name and after a username (with "bot" on the end)
4. Done, now save Bot token to access the HTTP API

#### After creating bot we need to install script on **Google Sheets**, follow these steps:

1. Go to the [table](https://docs.google.com/spreadsheets) in which you need to track changes
2. Go to **Extensions** > **Apps Scrips**
3. In **Editor** change code inside file with [code from this repository](https://github.com/plaksy/google-sheets-onedit-notify/blob/main/script.gs) and **Save**
4. After you added code - go to **Triggers**
5. Create new trigger with options on image and save

![image](https://user-images.githubusercontent.com/56319778/222957404-e76c97cb-4029-4de6-92f1-29c57c3e4e3e.png)

## How to change bot token and chat_id

1. Script trying to send a message via bot to user using CHAT_ID, to get your CHAT_ID go to [@userinfobot](https://t.me/userinfobot) and write */start*
2. Change ***YOUR_CHAT_ID*** with your chat id from [@userinfobot](https://t.me/userinfobot) in start of script you added before in **Editor**
3. Also change ***YOUR_TELEGRAM_BOT_TOKEN*** with token you get in bot setup

## If you need to check only a specific *column/row/cell*:
1. You need to check a specific ***column***? Change ***check_only_one_column*** to ***true*** and ***YOUR_COLUMN_LETTER*** to letter you need
2. You need to check a specific ***row***? Change ***check_only_one_row*** to ***true*** and ***YOUR_NUMBER*** to number you need (without quotation marks)
3. You need to check specific ***cell***?  Do two steps ***1*** and ***2***

### If you need more information - contact me via my [social media](https://github.com/plaksy). Thank you :herb:
