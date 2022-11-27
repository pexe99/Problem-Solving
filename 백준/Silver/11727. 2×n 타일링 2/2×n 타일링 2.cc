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
	int plus = 1;
	for (int i = 1; i < 1000; i++) {
		v[i] = (v[i - 1] * 2 + plus) % 10007;
		plus *= -1;
	}

	cin >> N;
	
	cout << v[N - 1] << "\n";

	return 0;
}