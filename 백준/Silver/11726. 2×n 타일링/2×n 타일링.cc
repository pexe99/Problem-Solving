#include <iostream>
#include <vector>
using namespace std;

int N;

int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	vector<int> v(1000, 0);
	v[0] = 1;
	v[1] = 2;
	for (int i = 2; i < 1000; i++) {
		v[i] = (v[i - 1] + v[i - 2]) % 10007;
	}

	cin >> N;
	
	cout << v[N - 1] << "\n";

	return 0;
}