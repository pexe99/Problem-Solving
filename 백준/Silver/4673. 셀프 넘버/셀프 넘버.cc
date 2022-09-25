#include <iostream>
#include <string>
#include <vector>
using namespace std;

int main() {
	vector<int> array(10001, 0);

	for (int i = 1; i < 10000; i++) {
		string n = to_string(i);
		int result = i;
		for (int j = 0; j < n.length(); j++) {
			result = result +  n[j] - '0';
		}
		if (result <= 10000) {
			array[result] = 1;
		}
	}
	for (int i = 1; i < 10001; i++) {
		if (array[i] != 1) cout << i << endl;
	}
	return 0;
}