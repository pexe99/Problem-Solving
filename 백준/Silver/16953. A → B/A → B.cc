#include <iostream>
using namespace std;

long long A, B;

int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	cin >> A >> B;

	int counter = 0;

	while (B > A) {
		if (B % 10 == 1) {
			B /= 10;
			counter++;
		}
		else if (B % 2 == 0) {
			B /= 2;
			counter++;
		}
		else {
			counter = -1;
			break;
		}
	}

	if(A != B) {
		counter = -1;
	}
	else {
		counter++;
	}

	cout << counter << "\n";

	return 0;
}