---
prev:
  text: 'Blog'
  link: '/blog/all-blogs.md'
next:
  text: 'Next post'
  link: '/blog/under-construction.md'# Encrypting a Message Using GPG with a Public Key
---
# :lock: Encrypting with GPG Public Key
To securely send an encrypted message using GPG and a recipient's public key, follow these steps:

## Prerequisites

Ensure you have GPG installed on your system and have the public key of the person to whom you wish to send the encrypted message.

## Steps to Encrypt a Message

### Step 1: Import the Recipient's Public Key

Before encrypting your message, the recipient's public key must be in your GPG keyring.

1. Import the recipient's public key file (e.g., `recipient-public-key.asc`) into your keyring:

    ```bash
    gpg --import recipient-public-key.asc
    ```

### Step 2: Verify the Key (Optional but Recommended)

To ensure that the key belongs to the intended recipient, verify the key fingerprint with them (through a secure channel) before proceeding.

1. List the imported keys to view the key details:

    ```bash
    gpg --list-keys
    ```

2. Verify the key's fingerprint:

    ```bash
    gpg --fingerprint recipient@example.com
    ```

### Step 3: Encrypt the Message

With the public key imported, you can now encrypt your message. This message is usually saved in a text file (e.g., `message.txt`).

1. Encrypt the file using the recipient's email address associated with their key:

    ```bash
    gpg --encrypt --recipient recipient@example.com message.txt
    ```

   This will create an encrypted file named `message.txt.gpg`.

### Step 4: Send the Encrypted Message

You can now send the encrypted file (`message.txt.gpg`) to the recipient through email or any other secure transfer method. Only the recipient, who possesses the corresponding private key, will be able to decrypt and read the message.

