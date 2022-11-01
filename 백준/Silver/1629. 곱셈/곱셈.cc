#include <iostream>
using namespace std;

long long int a, b, c;

long long int multiply(long long int A, long long int B, long long int C) {
	if (B == 1) {
		return A % C;
	}
	if (B % 2 == 1) {
		B = B - 1;
		long long int t = (multiply(A, B / 2, C) * multiply(A, B / 2, C)) % C;
		return (A * t) % C;
	}
	else {
		return (multiply(A, B / 2, C) * multiply(A, B / 2, C)) % C;
	}
}

int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	cin >> a >> b >> c;

	cout << multiply(a, b, c) << "\n";

	return 0;
}
