#include <iostream>
#include <vector>
using namespace std;

int T, N;
vector<int> plusArray(10, 0);

int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	cin >> T;

	plusArray[0] = 1;
	plusArray[1] = 2;
	plusArray[2] = 4;

	for (int i = 3; i < 10; i++) {
		plusArray[i] = plusArray[i - 1] + plusArray[i - 2] + plusArray[i - 3];
	}

	while (T--) {
		cin >> N;
		cout << plusArray[N - 1] << "\n";
	}

	return 0;
}