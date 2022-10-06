#include <iostream>
#include <vector>
using namespace std;

string input;

int main() {
	vector<int> v;
	int input;
	cin >> input;
	v.push_back(input);
	if (v[0] != 1 && v[0] != 8) {
		cout << "mixed\n";
		return 0;
	}
	bool ascending = (v[0] == 1);
	for(int i = 2; i<=8; i++){
		int input;
		cin >> input;
		if (ascending && i != input) {
			cout << "mixed\n";
			return 0;
		}
		if(!ascending && i != 9 - input) {
			cout << "mixed\n";
			return 0;
		}
	}

	if (ascending) {
		cout << "ascending\n";
	}
	else {
		cout << "descending\n";
	}
	return 0;


}