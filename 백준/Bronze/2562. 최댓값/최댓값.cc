#include <iostream>
#include <vector>
using namespace std;

int main() {
	vector<int> v;

	for (int i = 0; i < 9; i++) {
		int input;
		cin >> input;
		v.push_back(input);
	}

	int max = 0, index = 0;
	for (int i = 0; i < 9; i++) {
		if (max < v[i]) {
			max = v[i];
			index = i + 1;
		}
	}

	cout << max << "\n" << index << "\n";
}