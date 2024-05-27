#include <stdio.h>

unsigned int simple_hash(const char *str) {
	unsigned int hash = 0;
	while (*str) {
		hash = hash * 31 + *str;
		str++;
	}
	return hash;
}

int main() {
	const char *str = "Hello, World";
	unsigned int hash_value = simple_hash(str);
	printf("Hash value: %u\n", hash_value);
	return 0;
}
