#include <iostream>
#include <map>
using namespace std;

int N, input;
map<int, int> sorted;

int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	cin >> N;
	while (N--) {
		cin >> input;
		sorted[input]++;
	}

	for (auto iter : sorted) {
		for (int i = 0; i < iter.second; i++) {
			cout << iter.first << "\n";
		}
	}
	
	return 0;
}